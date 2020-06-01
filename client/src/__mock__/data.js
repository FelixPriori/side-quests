const data = {
  classesProgessData: [
    {
      id: 1,
      level: 2,
      experience: 100,
      quest_count: 3,
    },
    {
      id: 2,
      level: 0,
      experience: 0,
      quest_count: 0,
    },
    {
      id: 3,
      level: 1,
      experience: 100,
      quest_count: 2,
    },
  ],
  classesData: [
    {
      id: 1,
      name: "Rogue",
      description:
        "Rogues like to help people from the shadows by sneaking to the nearest store to deliver needed supplies",
      avatar:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
    {
      id: 2,
      name: "Bard",
      description:
        "Bards loves to entertain. They specialize in letting the imagination run wild and help people think of happy thoughts for a while.",
      avatar:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
    {
      id: 3,
      name: "Druid",
      description:
        "Druids love a companion and are happy to help your furry friends stay in tip top shape. Whether it's babysitting, or simply giving the dog a walk, Druids are happy to help!",
      avatar:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    },
  ],
  userData: [
    {
      id: 1,
      username: "ClingyMingus",
      first_name: "Clinton",
      last_name: "Andrews",
      email: "drandrews@example.com",
      password: "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
      avatar:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
      adventurer: true,
    },
  ],
  questData: [
    {
      id: 1,
      name: "Hungry for some soup!",
      description:
        "I am at home and feeling very sick. Can someone bring me some some soup please?",
      completed: false,
      latitude: 330,
      longitude: 123,
      classId: 1,
      villagerId: 1,
    },
    {
      id: 2,
      name: "My computer won't start! Can someone help?",
      description:
        "Ever since I installed this new app, my computer has been acting weird and won't start",
      completed: true,
      latitude: 330,
      longitude: 234,
      classId: 1,
      villagerId: 1,
    },
    {
      id: 3,
      name: "Can't figure out this math problem.",
      description: "I have a test coming up and I can't understand integrals.",
      completed: false,
      latitude: 321,
      longitude: 92,
      classId: 2,
      villagerId: 1,
    },
    {
      id: 4,
      name: "Can't figure out this math problem.",
      description: "I have a test coming up and I can't understand integrals.",
      completed: false,
      latitude: 321,
      longitude: 92,
      classId: 1,
      villagerId: 1,
    },
  ],
};

module.exports = { data };
