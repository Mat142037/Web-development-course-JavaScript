#Tuples storing student info
studentA = ("John Smith", 18, "B")
studentB = ("Tom Jones", 18, "C")
studentC = ("Jane Doe", 17, "B")

#Concantenate tuples into one tuple
students = (studentA, studentB, studentC)

#Using the method to see how many students there is and the index of a student
print("\nThere are " + str(len(students)) + " students")
print("\nThe index of Tom Jones is " + str(students.index(studentB)))

#Creating sets for student ID and course
studentID = {1001, 2002, 3003, 4004, 5005}
courses = {"Maths", "Science", "Geography", "French", "IT"}

#Set operations
studentID.update({6006, 7007})
completed_courses = {"Maths", "IT"}
updated_courses = courses.difference(completed_courses)
print("\nThe updated set of student ID's is " + str(studentID))
print("\nThe remaining courses are " + str(updated_courses))

#Frozen sets
frozenSetCourses = frozenset(["Maths", "Science", "Geography", "French", "IT"])
print("\nThe frozen set courses are " + str(frozenSetCourses))

#Try to add to a frozne set to bring up an error
frozenSetCourses.add("English")



