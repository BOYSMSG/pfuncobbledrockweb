from PIL import Image
import os

p = r'C:/Users/Shifan Gouri/.gemini/antigravity/brain/b04158dc-98e0-4744-b663-868a5c2aea9c/.user_uploaded/media_1793627656162_ef418a1b.png'
im = Image.open(p)
print('User logo image:', im.size, im.mode, os.path.getsize(p))
