import { AxiosStatic } from "axios";
import { fetchTemplateFactory } from "../../logic/fetchTemplates";

it("should call correct api endpoint and return result", async done => {
  const get = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ data: "templates" }));
  const axios = {} as AxiosStatic;
  axios.get = get;
  const result = await fetchTemplateFactory(axios)();
  expect(get.mock.calls.length).toBe(1);
  expect(get.mock.calls[0][0]).toBe("http://demo4452328.mockable.io/templates");
  expect(result).toBe("templates");
  done();
});
