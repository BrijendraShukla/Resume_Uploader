# Generated by Django 4.0.4 on 2023-08-10 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_name_profile_fname_profile_lname_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='state',
            field=models.CharField(max_length=100),
        ),
    ]