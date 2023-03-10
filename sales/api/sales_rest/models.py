from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50, null=True)
    year = models.PositiveSmallIntegerField(null=True)
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(unique=True, max_length=200)

    def __str__(self):
        return self.vin


class Customer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.BigIntegerField(null=True)

    def __str__(self):
        return self.name


class Salesperson(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(null=True)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_show_salesperson", kwargs={"pk": self.pk})

class Sale(models.Model):
    sale_price = models.PositiveIntegerField(null=True)

    vin = models.ForeignKey(
        AutomobileVO,
        related_name="sale",
        on_delete=models.CASCADE,
    )

    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sale",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="sale",
        on_delete=models.CASCADE,
        null=True
    )

    def get_api_url(self):
        return reverse("api_show_sale", kwargs={"pk": self.pk})

    def __str__(self):
        return self.salesperson.name
