from django.db import models


class Campaigns(models.Model):
    id = models.AutoField(primary_key=True)
    active = models.BooleanField(default=False)
    token = models.TextField()
    amount = models.DecimalField(decimal_places=2, max_digits=50)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, editable=True)
    updated_at = models.DateTimeField(auto_now=True, editable=True)

    def repr(self):
        return {
            'active': self.active,
            'token': self.token,
            'amount': self.amount, # float(self.amount / 10 ** 18),
            'desc': self.desc,
        }