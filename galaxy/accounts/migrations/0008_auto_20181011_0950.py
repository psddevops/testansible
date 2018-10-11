# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-10-11 13:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0119_scoring_edits_remove_contentrule'),
        ('accounts', '0007_auto_20180821_1259'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='repositories_followed',
            field=models.ManyToManyField(blank=True, related_name='following_users', to='main.Repository'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='users_followed',
            field=models.ManyToManyField(blank=True, to='main.Namespace'),
        ),
    ]
