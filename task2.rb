# Task 2

def minRotation(str1, str2)

  return -1 if str1.size != str2.size
  
  i = str2.index(str1[0])
  if (i == nil)
    return -1
  elsif (i == 0)
    if (str1.include?(str2)) 
      return 0
    else
      return -1
    end
  else
    if ((i+1) > str1.size/2.to_i)
      j = str1.size-i
    else
      j = i
    end
	puts i
    str3 = str2[i,str2.size] + str2[0,i];
    puts str3
    if (str1 == str3)
      return j
    else
      return -1
    end
  end
end

# Put your code here
str1 = ARGV[0].to_s
str2 = ARGV[1].to_s

puts minRotation(str1, str2)



