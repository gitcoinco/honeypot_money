from django.shortcuts import render
from django.views.decorators.http import require_GET

from django.http import JsonResponse
import web3

from honeypot_money.settings import POP_NETWORK, INFURA_API_KEY, POP_BASE_SITE, MINIMUM_SCORE, INCREASE_TRUST_SITE
from pop_api.python.pop_api import get_personhoodscore
from .models import Campaigns


@require_GET
def list_campaigns(request):
    campaigns = Campaigns.objects.all()

    campaigns_json = [campaign.repr() for campaign in campaigns]

    return JsonResponse(campaigns_json, safe=False)


@require_GET
def check_score(request):
    w3 = web3.Web3(web3.Web3.HTTPProvider(f'https://{POP_NETWORK}.infura.io/v3/{INFURA_API_KEY}'))
    next_step = ''
    reason = ''
    address = request.GET.get('address', '')

    try:
        score = get_personhoodscore(w3, POP_NETWORK, address)
    except ValueError:
        score = 0

    if score == 0:
        next_step = POP_BASE_SITE
    if score < MINIMUM_SCORE:
        next_step = INCREASE_TRUST_SITE

    return JsonResponse({
        'address': address,
        'score': score,
        'next': next_step
    })
