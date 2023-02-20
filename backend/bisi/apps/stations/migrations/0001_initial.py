# Generated by Django 4.1.5 on 2023-02-20 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Station',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('slug', models.SlugField(editable=False, max_length=255, unique=True)),
                ('name', models.CharField(max_length=255)),
                ('warning', models.BooleanField(default=False)),
                ('disabled', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name_plural': 'Stations',
            },
        ),
    ]
