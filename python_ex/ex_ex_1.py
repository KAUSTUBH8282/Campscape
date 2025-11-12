# Read line by line
file = open('txt_example.txt','r')
for line in file:
    print(line.strip())