# Task 1

# Put your code here
str = ARGV[0].to_s

str = str.delete("р");
str = str.delete("Р");
str = str.delete("к");
str = str.delete("К");
str = str.delete("н");
str = str.delete("Н");

puts str
