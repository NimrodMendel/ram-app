# Generated by Django 3.2.5 on 2021-07-24 12:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Character',
            new_name='Favorite',
        ),
    ]
