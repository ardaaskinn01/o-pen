import cv2
import numpy as np

# In hasan_exact_face_box (240x220):
fb = cv2.imread(r'c:\Users\ardaa\o-pen\hasan_exact_face_box.jpg')

# Check where the hand is on Hasan's shoulder/body:
b, g, r = fb[:,:,0].astype(int), fb[:,:,1].astype(int), fb[:,:,2].astype(int)
red = (r > 130) & (r > g * 1.3) & (r > b * 1.3)
print("Red pixels in face box:", np.sum(red))
y_r, x_r = np.where(red)
if len(x_r) > 0:
    print("Red pixels X in face box:", x_r.min(), x_r.max(), "Y:", y_r.min(), y_r.max())

# And where is the hand? Hand is skin-colored:
# In hasan4, notice the user cropped out everything except Hasan's head and neck!
# In hasan4:
h4 = cv2.imread(r'c:\Users\ardaa\o-pen\nurettin-tutak\public\fabrika\hasan4.png')
# Notice that hasan4 had white background because the user manually removed the background/red person!
# But user said: "pixel ayrımını ben yaptığım için görsel biraz yamuk duruyor. hasan5.jpg'i yerleştirelim ama çözünürlük artmalı keskinleşme olmalı ayrıca kırmızılı kişi eliyle birlikte kaybolmalı."
