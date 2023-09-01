from django.db import models

# Create your models here.
class Game(models.Model):
    name=models.CharField(max_length=30)
    description=models.TextField()
    released=models.DateField()
    background_image=models.ImageField(upload_to="games_bg_images")
