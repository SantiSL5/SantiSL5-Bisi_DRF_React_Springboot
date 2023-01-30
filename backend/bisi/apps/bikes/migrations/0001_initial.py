# Generated by Django 4.1.5 on 2023-01-30 13:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('slots', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('number', models.IntegerField(db_index=True, unique=True)),
                ('warning', models.BooleanField(default=False)),
                ('disabled', models.BooleanField(default=False)),
                ('slot', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='slots', to='slots.slot')),
            ],
            options={
                'verbose_name_plural': 'Bikes',
            },
        ),
    ]
