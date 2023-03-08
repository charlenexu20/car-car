# Generated by Django 4.0.3 on 2023-03-08 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_remove_automobilevo_import_href_automobilevo_color_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='is_canceled',
            new_name='is_cancelled',
        ),
        migrations.RenameField(
            model_name='appointment',
            old_name='vip',
            new_name='is_vip',
        ),
        migrations.AddField(
            model_name='appointment',
            name='vin',
            field=models.CharField(max_length=17, null=True),
        ),
        migrations.AlterField(
            model_name='automobilevo',
            name='year',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='technician',
            name='employee_number',
            field=models.PositiveIntegerField(),
        ),
    ]