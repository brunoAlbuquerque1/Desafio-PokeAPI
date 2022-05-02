import React from "react";
import MockAdapter from "axios-mock-adapter";
import { render, act, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import api from "../../service/api";
import ListPokemon from "./listPokemon";

const apiMock = new MockAdapter(api);
const mockPokemon = {
  id: 1,
  name: "pokemon name",
  image: "image",
};
describe("List Pokemon component tests", () => {
  it("renders without crashing with request", async () => {
    render(<ListPokemon />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();

    act(() => {
      apiMock.onGet("/pokemon").reply(200, [{ ...mockPokemon }]);
    });

    await waitFor(() => {
      expect(screen.getByTestId("resolved")).toBeInTheDocument();
    });
  });

  it("should render the next page and the previous page", async () => {
    render(<ListPokemon />);
    expect(screen.getByText("1")).toBeInTheDocument();

    const nextButon = screen.getByTestId("nextButton_component");
    userEvent.click(nextButon);
    expect(screen.getByText("2")).toBeInTheDocument();

    const prevBtton = screen.getByTestId("prevButton_component");
    userEvent.click(prevBtton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});

// jest.useFakeTimers()

// describe('ListHeroes.jsx', () => {
//     const resultGetHeroesByName = [
//         {
//             id: 1,
//             name: 'Iron man',
//             thumbnail: {
//                 path: 'http://iron-man/',
//                 extension: 'png'
//             }
//         },
//         {
//             id: 2,
//             name: 'Captain America',
//             thumbnail: {
//                 path: 'http://captain-america/',
//                 extension: 'png'
//             }
//         }
//     ]

//     const heroesGatewayMock = {
//         getHeroesByName: jest.fn().mockImplementation(() => (
//             Promise.resolve(resultGetHeroesByName))
//         )
//     }

//     beforeEach(() => {
//         heroesGatewayMock.getHeroesByName.mockClear()
//     })

//     it('Should render ListHeroes with SearchBar without errors', () => {
//         const wrapper = render(<ListHeroes heroesGateway={heroesGatewayMock} />)
//     })

//     it('Should call getHeroesByName with initial search state and save on state when component was rendered', () => {
//         const wrapper = mount(<ListHeroes heroesGateway={heroesGatewayMock} />)

//         expect(1).toEqual(heroesGatewayMock.getHeroesByName.mock.calls.length)
//         expect(wrapper.state().search).toEqual(heroesGatewayMock.getHeroesByName.mock.calls[0][0])
//         return heroesGatewayMock.getHeroesByName().then(() => {
//             expect(resultGetHeroesByName).toEqual(wrapper.state().heroes)
//         })
//     })

//     it('Should call getHeroesByName when search state was updated', () => {
//         const searchValue = 'different-value'
//         const wrapper = shallow(<ListHeroes heroesGateway={heroesGatewayMock} />)

//         wrapper.setState({ search: searchValue })

//         expect(1).toEqual(heroesGatewayMock.getHeroesByName.mock.calls.length)
//         return heroesGatewayMock.getHeroesByName().then(() => {
//             expect(resultGetHeroesByName).toEqual(wrapper.state().heroes)
//         })
//     })

//     it('Should not call getHeroesByName when search state was updated with the same value', () => {
//         const wrapper = shallow(<ListHeroes heroesGateway={heroesGatewayMock} />)

//         wrapper.setState({ search: wrapper.state().search })

//         expect(0).toEqual(heroesGatewayMock.getHeroesByName.mock.calls.length)
//     })

//     it('Should update search state when input on SearchBar was changed', () => {
//         const searchValue = 'different-value'
//         const wrapper = mount(<ListHeroes heroesGateway={heroesGatewayMock} />)

//         wrapper.find(SearchBar).find('input').simulate('change', { target: { value: searchValue }})
//         jest.runOnlyPendingTimers()

//         expect(searchValue).toEqual(wrapper.state().search)
//     })

//     it('Should render heroes in respectives rows', () => {
//         const wrapper = mount(<ListHeroes heroesGateway={heroesGatewayMock} />)

//         wrapper.setState({ heroes: resultGetHeroesByName })

//         expect(wrapper.find('.heroRow')).toHaveLength(resultGetHeroesByName.length)
//     })
// })
