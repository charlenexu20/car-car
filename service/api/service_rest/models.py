from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50, null=True)
    year = models.PositiveIntegerField(null=True)
    import_vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, null=True, unique=True)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"pk": self.id})

    def __str__(self):
        return f"{self.import_vin}"


class Technician(models.Model):
    technician_name = models.CharField(max_length=100, unique=True)
    employee_number = models.PositiveIntegerField()

    def get_api_url(self):
        return reverse("api_show_technician", kwargs={"pk": self.id})

    def __str__(self):
        return f"{self.technician_name} {self.employee_number}"


class Appointment(models.Model):
    vin = models.CharField(max_length=17, null=True)
    customer_name = models.CharField(max_length=100, unique=True)
    date = models.DateField(max_length=50, blank=True, null=True)
    time = models.TimeField(max_length=50, blank=True, null=True)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )
    reason = models.TextField()
    is_vip = models.BooleanField(default=False)
    is_cancelled = models.BooleanField(default=False)
    is_finished = models.BooleanField(default=False)

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.id})

    def __str__(self):
        return self.vin
