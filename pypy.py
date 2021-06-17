class Reader:
	def __init__(self, file):
		self.file = open(file, 'r')
		self.is_done = False

	def read_char(self):
		content = self.file.readline()
		answer = ''
		for c in content:
			if c.isalpha():
				answer += c
		self.is_done = True
		self.file.close()
		return answer

reader = Reader('day3.txt')
while not reader.is_done:
	print(reader.read_char(), end='')