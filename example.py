from datetime import datetime

def is_it_time_to_eat():
	print( datetime.now().isoformat() )
	if (12 <= datetime.now().hour and 14 > datetime.now().hour ) :
		return True
	else:
		return False

def main():
	print( is_it_time_to_eat() )

mavariable = 'Toto'

if __name__ == "__main__":
	# appeller ma function principalle
	main()