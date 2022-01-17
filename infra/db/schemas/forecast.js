async function create(mongodb) {
  const forecastSchema = await mongodb.createCollection("forecast", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "year", "major", "address"],
        properties: {
          name: {
            bsonType: "string",
            description: "must be a string and is required",
          },
          year: {
            bsonType: "int",
            minimum: 2017,
            maximum: 3017,
            description: "must be an integer in [ 2017, 3017 ] and is required",
          },
          major: {
            enum: ["Math", "English", "Computer Science", "History", null],
            description: "can only be one of the enum values and is required",
          },
          gpa: {
            bsonType: ["double"],
            description: "must be a double if the field exists",
          },
          address: {
            bsonType: "object",
            required: ["city"],
            properties: {
              street: {
                bsonType: "string",
                description: "must be a string if the field exists",
              },
              city: {
                bsonType: "string",
                description: "must be a string and is required",
              },
            },
          },
        },
      },
    },
  });
  // const forecastSchema = mongodb.createCollection("forecast", {
  //   lat: {
  //     type: Float32Array,
  //     required: true,
  //   },
  //   lon: {
  //     type: Float32Array,
  //     required: true,
  //   },
  //   timezone: String,
  //   description: String,
  //   publisher: {
  //     type: String,
  //     required: true,
  //   },
  //   created: Date,
  // });
  console.log("MIAU");

  console.log(forecastSchema);
  return forecastSchema;

  // forecastSchema.pre("save", (next) => {
  //   this.created = moment().toJSON();
  //   return next();
  // });
}

module.exports = create;
