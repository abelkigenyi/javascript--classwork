let regex1=new RegExp("hello")//inside the quotes is the regular expression pattern of regular expression
 let regex2 = /world/;//this is the literal syntax.once u have this object, u can use it in one of the methods(regex constructor/string object wrapper)

 let text="hello world tumoro"
 let regex3= new RegExp("hello")//this will search for hello in the text
 let regex4 =/world/;//this searches for word in the text

//how it works
regex3.test(text)//if it finds the pattern it will bring true,if it doesnt it will bring false
console.log(regex3.test(text))
console.log(regex4.test(text))//it is case sensitive ie responds to capital and small letters

//methods in which we can use regular expression patterns
test()//true if pattern found, false if absent

exec()//it will output an array of data, where it will show the patterns index,numlength,n the word itself.it will print null if not found
console.log(regex3.exec(text)) 

//string methods
match()//same output as exec().it will print null if not found
console.log(text.match(regex3));//syntax=>variable.method(variable with regex pattern)


search().//it outputs the index..if not found, it ouputs a negative index
console.log(text.search(regex3));//syntax=>variable.search(variable with regex pattern)

replace()//it will replace the pattern directly and output with the new word. to see the original.just type text in the browser
console.log(text.replace(regex3, 'globe'))//syntax=>variable.replace(variable with regex pattern,'what it should replace with incase the pattern is found')

split()//into array with the pattern removed
console.log(text.split(regex3))//syntax=>variable.split(variable with regex pattern)
