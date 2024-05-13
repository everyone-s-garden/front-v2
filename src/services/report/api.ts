import apiClient from '@/api/apiClient';

const reportAPI = {
  mapReport: async function (id: string | undefined, values: MapReportValues) {
    const res = await apiClient.post(`/v1/reports/gardens/${id}`, values);

    return res;
  },
};

export default reportAPI;
