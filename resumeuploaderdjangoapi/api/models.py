from django.db import models

STATE_CHOICE = ((
 ('Bihar','Bihar'),
 ('Jharkhand','Jharkhand'),
 ('West Bengal','West Bengal'),
 ('Assam','Assam'),
 ('Uttar Pradesh','Uttar Pradesh'),
 ('Uttarakhand','Uttarakhand'),
 ('kerla','kerla'),
 ('jammu','jammu'),
 ('punjab','punjab'),
))
LOCATION_CHOICE = ((
 ('gurugram','gurugram'),
 ('pune','pune'),
 ('banglore','banglore'),
 ('noida','noida'),
 ('channi','channi'),
 ('indor','indor'),
 ('mumbai','mumbai'),
 ('hydrabad','hydrabad'),
 ('kolkatta','kolkatta'),
))

class Profile(models.Model):
  Fname= models.CharField(max_length=100)
  Mname= models.CharField(max_length=100, blank=True)
  Lname= models.CharField(max_length=100)
  email = models.EmailField()
  dob = models.DateField(auto_now=False, auto_now_add=False)
  state = models.CharField(max_length=100)
  gender= models.CharField(max_length=100)
  location= models.CharField(max_length=100)
  pimage = models.ImageField(upload_to='pimages', blank=True)
  rdoc = models.FileField(upload_to='rdocs', blank=True)

