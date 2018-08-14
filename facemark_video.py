import cv2
import numpy

cv2.namedWindow("Face_Detect")  #定义一个窗口
# create face cascade
path = r"C:\Users\lzx\AppData\Local\Programs\Python\Python36\Lib\site-packages\cv2\data\haarcascade_frontalface_default.xml"
faceCascade = cv2.CascadeClassifier(path)

# open video and read a frame, file name or 0 for camera
# cap = cv2.VideoCapture('vodeo.mp4')
cap = cv2.VideoCapture(0)

while cap.isOpened():
	ret, frame = cap.read()
	gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
	
	# detect faces
	faces = faceCascade.detectMultiScale(gray, 1.15, 5)
	print(faces)
	
	# mark the face in this frame
	for (x,y,w,h) in faces:
		frame = cv2.rectangle(frame, (x,y), (x+w, y+h), (0,0,255), 2)
		
	# show the frame
	cv2.imshow('Video', frame)
	if cv2.waitKey(100) & 0xFF == ord('q'):
		break
		
cap.release()
cv2.destoryAllWindows()