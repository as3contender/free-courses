# Task 3

# Put your code here
def getType(t)

  #type 0 = {1}
  #type 1 = {2-4}
  #type 2 = {5-20}
  
  if (t>10) 
    t = t%100
  end
  
  if ((t>10) && (t<20)) 
    return 2
  else
    t = t%10
    if (t == 1)
      return 0
    elsif ((t >= 2) && (t <=4))
      return 1
     else
      return 2
    end
  end
end

def getHours(h)

  return ''.to_s if h == 0 
  
  t = ['','а','ов']
  
  return h.to_s + ' час' + t[getType(h)] + ' '

end

def getMinutes(m)

  return ''.to_s if m == 0
  
  t = ['а','ы','']
  
  return m.to_s + ' минут' + t[getType(m)] + ' '

end

def getSeconds(s)

  return ''.to_s if s == 0
  
  t = ['а','ы','']
  
  return s.to_s + ' секунд' + t[getType(s)] + ' ' 

end

def getSum(t1, t2)

  st = t1+t2
  
  h = (st/3600).floor
  m = ((st-h*3600)/60).floor
  s = (st-h*3600-m*60).floor
  
  str = getHours(h)+getMinutes(m)+getSeconds(s)
  return  str[0,str.size-1]
  
end

  t1 = ARGV[0].to_i
  t2 = ARGV[1].to_i
  
  puts getSum(t1,t2)
  