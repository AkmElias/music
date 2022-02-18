import SongItem from "@/Components/SongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

describe("SongItem.vue", () => {
  test("render song.displayName", () => {
    const song = {
      display_name: "test",
    };

    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    const compositionAuthor = wrapper.find(".text-gray-500");

    expect(compositionAuthor.text()).toBe(song.display_name);
  });
});
