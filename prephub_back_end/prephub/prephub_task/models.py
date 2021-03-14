from django.db import models

# Create your models here.

# This table created for countries
class Countries(models.Model):
    country=models.CharField(max_length=50)

    def __str__(self):
        return self.country

# This table created for states
class States(models.Model):
    country=models.ForeignKey(Countries,on_delete=models.CASCADE)
    state=models.CharField(max_length=50)

    def __str__(self):
        return self.state

# This table created for cities
class Cities(models.Model):
    state=models.ForeignKey(States,on_delete=models.CASCADE)
    city=models.CharField(max_length=50)

    def __str__(self):
        return self.city