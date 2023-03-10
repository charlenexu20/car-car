from django.urls import path

from .views import api_list_sales, api_list_salespeople, api_list_customers, api_show_saleshistory


urlpatterns = [
    path("sales/", api_list_sales, name="api_list_sales"),
    path("salesperson/<int:id>/sales/",
         api_show_saleshistory, name="api_show_saleshistory"),
    path("salespeople/", api_list_salespeople, name="api_list_salespersons"),
    path("customers/", api_list_customers, name="api_list_customers"),

]
