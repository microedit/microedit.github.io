# install cv2: 
# pip install  opencv_python
import cv2
# import numpy

def picmark(classifierFile, imageFile, showpic, writefile ):
	# create face cascade
	path = r'C:\Users\lzx\AppData\Local\Programs\Python\Python36\Lib\site-packages\cv2\data\\'
	classifier = cv2.CascadeClassifier(path + classifierFile)


	# read image
	image = cv2.imread(imageFile)
	gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

	# detect faces
	faces = classifier.detectMultiScale(gray, 1.15, 5)
	print(faces)

	# mark the face in this image
	for (x,y,w,h) in faces:
		image = cv2.rectangle(image, (x,y), (x+w, y+h), (0,0,255), 2)
		
	# show the image
	if showpic:
		cv2.imshow('Faces', image)
	
	# write file
	if writefile :
		cv2.imwrite(imageFile + '_' + classifierFile + '.jpg', image)
	
def mark2(file1):
	picmark("haarcascade_eye.xml", file1, True, True)
	picmark("haarcascade_eye_tree_eyeglasses.xml", file1, True, True)
	picmark("haarcascade_frontalcatface.xml", file1, True, True)
	picmark("haarcascade_frontalcatface_extended.xml", file1, True, True)
	picmark("haarcascade_frontalface_alt.xml", file1, True, True)
	picmark("haarcascade_frontalface_alt2.xml", file1, True, True)
	picmark("haarcascade_frontalface_alt_tree.xml", file1, True, True)
	picmark("haarcascade_frontalface_default.xml", file1, True, True)
	picmark("haarcascade_fullbody.xml", file1, True, True)
	picmark("haarcascade_lefteye_2splits.xml", file1, True, True)
	picmark("haarcascade_licence_plate_rus_16stages.xml", file1, True, True)
	picmark("haarcascade_lowerbody.xml", file1, True, True)
	picmark("haarcascade_profileface.xml", file1, True, True)
	picmark("haarcascade_righteye_2splits.xml", file1, True, True)
	picmark("haarcascade_russian_plate_number.xml", file1, True, True)
	picmark("haarcascade_smile.xml", file1, True, True)
	picmark("haarcascade_upperbody.xml", file1, True, True)

cv2.namedWindow("Face_Detect")  #定义一个窗口
mark2(r'C:\Users\lzx\Pictures\1598392097.jpg')
mark2(r'C:\Users\lzx\Pictures\1689482300.jpg')
mark2(r'C:\Users\lzx\Pictures\1758015594.jpg')
mark2(r'C:\Users\lzx\Pictures\danweipic81890.jpg')

cv2.waitKey(0)
cv.destroyAllWindows()