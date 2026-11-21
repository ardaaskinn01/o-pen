from PIL import Image

# Let's save a visual grid with coordinate markers on hasan5
import cv2

h5 = cv2.imread(r'c:\Users\ardaa\o-pen\nurettin-tutak\public\fabrika\hasan5.jpg')
h, w = h5.shape[:2]

# Draw coordinate grid lines every 100px
grid = h5.copy()
for x in range(0, w, 100):
    cv2.line(grid, (x, 0), (x, h), (0, 255, 0), 1)
    cv2.putText(grid, str(x), (x + 2, 25), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)

for y in range(0, h, 100):
    cv2.line(grid, (0, y), (w, y), (0, 255, 0), 1)
    cv2.putText(grid, str(y), (10, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)

cv2.imwrite(r'c:\Users\ardaa\o-pen\h5_grid.jpg', grid)
print("Grid image saved.")
