import cv2
import numpy as np
from PIL import Image

path = r'c:\Users\ardaa\o-pen\nurettin-tutak\public\fabrika\hasan5.jpg'
img = Image.open(path)
w, h = img.size
print('hasan5 size:', w, h)

# Let's save a copy to inspect or check color distribution
arr = np.array(img)
# Find where red person is: red channel high, green & blue lower
red_mask = (arr[:,:,0] > 150) & (arr[:,:,1] < 100) & (arr[:,:,2] < 100)
print('Red pixels detected:', np.sum(red_mask))
# Find coordinates of red pixels
y_indices, x_indices = np.where(red_mask)
if len(x_indices) > 0:
    print('Red pixels X range:', x_indices.min(), x_indices.max(), 'Y range:', y_indices.min(), y_indices.max())
