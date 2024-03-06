const exampleAPI = {
  getExampleData: async (id: number) => {
    return Promise.resolve(`example data ${id}`);
  },
  createExampleData: async (data: string) => {
    return Promise.resolve(data);
  },
};

export default exampleAPI;
