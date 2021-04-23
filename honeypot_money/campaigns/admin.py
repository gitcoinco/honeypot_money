from django.contrib import admin

from .models import Campaigns


@admin.register(Campaigns)
class CampaignAdmin(admin.ModelAdmin):
    list_display = ('id', 'active', 'token', 'amount', 'desc', 'created_at', 'updated_at',)
