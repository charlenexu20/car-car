from django.shortcuts import render
from .models import AutomobileVO, Technician, Appointment
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "color",
        "year",
        "import_vin",
        "import_href"
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "technician_name",
        "employee_number",
        "id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer_name",
        "technician",
        "reason",
        "is_vip",
        "is_cancelled",
        "is_finished",
        "id",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self, o):
        if isinstance(o.date, str) and isinstance(o.time, str):
            return {
                "date": o.date,
                "time": o.time,
            }
        else:
            return {
                "date": o.date.isoformat(),
                "time": o.time.isoformat(),
            }


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "An error occurred!"},
                status=400,
            )

@require_http_methods(["GET", "DELETE"])
def api_show_technician(request, pk):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=pk)
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Technician does not exist"},
                status=400,
            )
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            technician_id = content["technician"]
            technician = Technician.objects.get(id=technician_id)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status=400,
            )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_appointment(request, pk):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=pk)
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"},
                status=400,
            )
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET"])
def api_list_automobiles(request):
    if request.method == "GET":
        autos = AutomobileVO.objects.all()
        auto_list = []
        for auto in autos:
            values = {
                "import_href": auto.import_href,
                "import_vin": auto.import_vin,
                "color": auto.color,
                "year": auto.year,
            }
            auto_list.append(values)
        return JsonResponse({"autos": auto_list})
