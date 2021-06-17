global s

def foo(s):
	s = 1
	try:
		s += '1'
	except UnboundLocalError:
		print('wow')
	except:
		print('owo')

foo('abc')