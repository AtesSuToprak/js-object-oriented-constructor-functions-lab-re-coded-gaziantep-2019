function Scooter(year, color, model) {
  this.year = year 
  this.color = color
  this.model = model
}

let samson = new Scooter(2015, "red", "swoosh");

function Driver (name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}

let allison = new Driver("Allison", "16 years", "2 years");


/*describe('Driver constructor', function(){
    it("should create a new driver with three properties", function(){
      let allison = new Driver("Allison", "16 years", "2 years");
      expect(allison).to.be.an.instanceof(Driver);
      expect(allison.name).to.equal("Allison");
      expect(allison.age).to.equal("16 years");
      expect(allison.experience).to.equal("2 years");
    });
  });

  describe('PickupLocation constructor', function(){
    it("should create a new PickupLocation with two properties", function(){
      let poshHotel = new PickupLocation("123 Broadway", "New York City");
      expect(poshHotel).to.be.an.instanceof(PickupLocation);
      expect(poshHotel.address).to.equal("123 Broadway");
      expect(poshHotel.city).to.equal("New York City");
    });*/