import os
from hashlib import sha1

def hashfile(filepath):
	f = open(filepath, 'rb')
	try:
		data = f.read()
	finally:
		f.close()
	
	# data_to_encode = data

	filesize = len(data)
	data_to_encode = ("blob {}\0".format(filesize)).encode('ascii')
	data_to_encode += data

	s = sha1()
	s.update(data_to_encode)

	print( s.hexdigest() )


if __name__ == "__main__":
	hashfile("example.py")