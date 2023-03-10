from django.shortcuts import render
from common.json import ModelEncoder
from .models import AutomobileVO, Customer, Salesperson, Sale
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json



class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href"
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
        'id'
    ]


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "name",
        "employee_number",
        'id'
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "salesperson",
        "customer",
        "vin",
        "sale_price",
        'id'
    ]

    encoders = {
        'salesperson': SalespersonEncoder(),
    }

    def get_extra_data(self, o):
        return {
            "salesperson": o.salesperson.name,
            "employee_number": o.salesperson.employee_number,
            "customer": o.customer.name,
            'vin': o.vin.vin,
        }



@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {'sales': sales},
            encoder=SaleEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        try:
            salesperson = Salesperson.objects.get(id=content['salesperson'])
            content['salesperson'] = salesperson

        except Salesperson.DoesNotExist:
            return JsonResponse(
                {'error': 'Salesperson not found'},
                status=400,
            )

        try:
            automobile_vin = AutomobileVO.objects.get(vin=content["vin"])
            content['vin'] = automobile_vin

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {'error': 'Automobile not found'},
                status=400,
            )


        try:
            customer_inst = Customer.objects.get(id=content["customer"])
            content['customer'] = customer_inst

        except Customer.DoesNotExist:
            return JsonResponse(
                {'error': 'Customer not found'},
                status=400,
            )

    sale = Sale.objects.create(**content)
    return JsonResponse(
        sale,
        encoder=SaleEncoder,
        safe=False,
    )


@require_http_methods(["GET", "POST"]) #show/create sales persons
def api_list_salespeople(request):
    if request.method == "GET":
        salespersons = Salesperson.objects.all()
        return JsonResponse(
            {"salespersons": salespersons},
            encoder=SalespersonEncoder,
            safe=False,
        )

    else:
        content = json.loads(request.body)

        try:
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {'message':'Salesperson not found'},
                safe=False,
            )


@require_http_methods(["GET"])
def api_show_salespersons(request,salesperson_id): #list salesperson
    if request.method == "GET":
        salesperson = Salesperson.objects.get(pk=salesperson_id)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"]) #Create and list customers
def api_list_customers(request):
    if request.method== "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            customers,
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)

        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message":"Customer not found"},
                safe=False,
            )


@require_http_methods(["GET"]) #Get sales history for each person
def api_show_saleshistory(request, id):
    if request.method == "GET":
        salesperson = Salesperson.objects.get(id=id)
        sales = Sale.objects.filter(salesperson=salesperson)
        return JsonResponse(
            sales,
            encoder=SaleEncoder,
            safe=False,
        )
