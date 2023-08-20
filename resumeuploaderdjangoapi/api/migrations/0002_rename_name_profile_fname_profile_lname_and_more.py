# Generated by Django 4.0.4 on 2023-08-10 05:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='name',
            new_name='Fname',
        ),
        migrations.AddField(
            model_name='profile',
            name='Lname',
            field=models.CharField(default='ram', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='Mname',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='profile',
            name='state',
            field=models.CharField(choices=[('Bihar', 'Bihar'), ('Jharkhand', 'Jharkhand'), ('West Bengal', 'West Bengal'), ('Assam', 'Assam'), ('Uttar Pradesh', 'Uttar Pradesh'), ('Uttarakhand', 'Uttarakhand'), ('kerla', 'kerla'), ('jammu', 'jammu'), ('punjab', 'punjab')], max_length=50),
        ),
    ]