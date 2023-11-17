class Pet :
    def __init__(self,name,pet_type,triks,):
        self.name = name
        self.pet_type=pet_type
        self.triks =triks
        self.health = 100
        self.energy = 100

    def sleep(self):
        self.energy+=25


    def eat(self):
        self.energy+=5
        self.health+=10


    def play(self):
        self.health -=5

    def noise (self):
        if (self.pet_type=="dog"):
            print("woof !")
        elif(self.pet_type == "Cat"):
            print("Miaw")
        else:
            print("Mooooooo")
    
    def run (self):
        self.energy-5


pet = Pet("rex","dog",["bite","lick"])
pet.sleep() 
pet.eat()
pet.play()
pet.run()

            