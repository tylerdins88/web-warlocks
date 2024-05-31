<template>
  <div class="about">
    <div class="about-container flex flex-wrap justify-center">
      <div v-for="person in warlocks" :key="person.id"
        class="max-w-sm bg-white border border-gray-200 shadow hover:shadow-lg-blue-500 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-4 my-8 hover:shadow-lg">
        <a :href="person.deployedLink">
          <img class="rounded-t-lg" :src="person.image" alt="screenshot of webpage" />
        </a>
        <div class="p-5">
          <a :href="person.deployedLink">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ person.title }}</h5>
          </a>
          <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ person.description }}</p>
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button type="button"
              class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              @click="openLink(person.deployedLink)">
              <svg version="1.1" id="WEBPAGE" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -250 2500 2500"
                enable-background="new 0 0 1800 1800" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path fill="#333333"
                      d="M1718.199,2.029H81.579c-43.977,0-79.754,35.772-79.754,79.741v1636.633 c0,43.973,35.777,79.749,79.754,79.749h1636.62c43.969,0,79.745-35.776,79.745-79.749V81.77 C1797.944,37.801,1762.168,2.029,1718.199,2.029z M1734.873,1718.402c0,9.195-7.479,16.679-16.674,16.679H81.579 c-9.204,0-16.683-7.483-16.683-16.679V340.556h1669.977V1718.402z M1734.873,277.485H64.896V81.77c0-9.19,7.479-16.67,16.683-16.67 h1636.62c9.194,0,16.674,7.479,16.674,16.67V277.485z">
                    </path>
                    <circle fill="#333333" cx="201.36" cy="168.237" r="50.682"></circle>
                    <circle fill="#333333" cx="361.29" cy="168.237" r="50.682"></circle>
                    <circle fill="#333333" cx="521.221" cy="168.237" r="50.682"></circle>
                    <path fill="#333333"
                      d="M691.019,1349.104c4.712,2.503,9.771,3.687,14.76,3.687c11.293,0,22.218-6.085,27.884-16.753 l362.28-682.476c8.166-15.385,2.314-34.475-13.066-42.64c-15.385-8.166-34.474-2.31-42.639,13.067l-362.291,682.476 C669.782,1321.85,675.634,1340.939,691.019,1349.104z">
                    </path>
                    <path fill="#333333"
                      d="M281.378,967.035c0.018,0.29,0.062,0.576,0.083,0.871c0.181,2.38,0.647,4.765,1.395,7.114 c0.105,0.325,0.184,0.659,0.299,0.984c0.136,0.388,0.317,0.771,0.471,1.153c0.233,0.599,0.466,1.193,0.739,1.773 c0.021,0.048,0.04,0.102,0.066,0.153c0.057,0.124,0.141,0.229,0.202,0.353c0.537,1.091,1.144,2.143,1.804,3.162 c0.176,0.282,0.352,0.561,0.542,0.832c0.743,1.078,1.544,2.12,2.424,3.103c0.163,0.18,0.338,0.339,0.501,0.514 c0.739,0.788,1.526,1.541,2.354,2.254c0.303,0.259,0.603,0.515,0.911,0.765c0.858,0.688,1.75,1.333,2.692,1.936 c0.176,0.115,0.344,0.247,0.524,0.356c0.928,0.567,1.888,1.091,2.891,1.57l315.32,150.776c4.391,2.098,9.019,3.092,13.581,3.092 c11.769,0,23.058-6.616,28.469-17.941c7.515-15.71,0.871-34.54-14.844-42.055L385.988,965.481l255.813-122.323 c15.715-7.514,22.359-26.344,14.844-42.055c-7.51-15.714-26.344-22.367-42.05-14.848L299.592,936.882 c-0.009,0.004-0.018,0.004-0.022,0.008l-0.295,0.141c-0.264,0.128-0.501,0.282-0.761,0.414c-0.633,0.321-1.263,0.646-1.874,1.016 c-0.356,0.212-0.69,0.449-1.038,0.678c-0.515,0.335-1.034,0.674-1.536,1.042c-0.37,0.274-0.712,0.573-1.074,0.859 c-0.44,0.36-0.879,0.712-1.307,1.1c-0.356,0.325-0.695,0.673-1.033,1.012c-0.388,0.383-0.774,0.761-1.145,1.166 c-0.343,0.383-0.66,0.779-0.981,1.175c-0.33,0.396-0.66,0.787-0.968,1.205c-0.334,0.453-0.638,0.919-0.946,1.391 c-0.255,0.392-0.528,0.774-0.77,1.179c-0.331,0.55-0.621,1.117-0.911,1.681c-0.167,0.317-0.352,0.607-0.501,0.928 c-0.026,0.054-0.044,0.103-0.066,0.154c-0.273,0.581-0.506,1.175-0.739,1.769c-0.154,0.388-0.335,0.77-0.471,1.157 c-0.115,0.325-0.194,0.66-0.299,0.99c-0.748,2.345-1.214,4.729-1.395,7.109c-0.022,0.291-0.066,0.581-0.083,0.872 c-0.027,0.518-0.005,1.037-0.005,1.556C281.373,965.997,281.351,966.512,281.378,967.035z">
                    </path>
                    <path fill="#333333"
                      d="M1117.246,1129.855c5.411,11.325,16.705,17.941,28.474,17.941c4.558,0,9.19-0.994,13.576-3.092 l315.321-150.776c1.003-0.479,1.967-1.003,2.89-1.57c0.181-0.109,0.349-0.241,0.523-0.356c0.942-0.603,1.839-1.248,2.692-1.936 c0.313-0.25,0.612-0.506,0.916-0.765c0.826-0.713,1.61-1.466,2.35-2.254c0.166-0.175,0.343-0.334,0.501-0.514 c0.88-0.982,1.681-2.024,2.429-3.103c0.184-0.271,0.361-0.55,0.54-0.832c0.661-1.02,1.268-2.071,1.805-3.162 c0.063-0.124,0.145-0.229,0.202-0.353c0.022-0.052,0.039-0.105,0.065-0.153c0.274-0.58,0.503-1.175,0.74-1.773 c0.153-0.383,0.334-0.766,0.47-1.153c0.115-0.325,0.193-0.659,0.301-0.984c0.746-2.35,1.209-4.734,1.393-7.114 c0.022-0.295,0.066-0.581,0.081-0.871c0.026-0.523,0.008-1.038,0.008-1.554c0-0.519,0.019-1.038-0.008-1.556 c-0.015-0.291-0.059-0.581-0.081-0.872c-0.184-2.381-0.646-4.765-1.393-7.109c-0.107-0.33-0.186-0.665-0.301-0.99 c-0.136-0.388-0.316-0.77-0.47-1.157c-0.237-0.594-0.466-1.188-0.74-1.769c-0.026-0.052-0.043-0.101-0.065-0.154 c-0.154-0.32-0.34-0.616-0.506-0.928c-0.291-0.567-0.58-1.131-0.906-1.681c-0.246-0.408-0.52-0.802-0.783-1.197 c-0.304-0.457-0.599-0.923-0.933-1.368c-0.316-0.427-0.655-0.831-0.994-1.236c-0.308-0.383-0.616-0.77-0.95-1.135 c-0.383-0.427-0.787-0.822-1.192-1.224c-0.321-0.319-0.638-0.646-0.973-0.954c-0.458-0.413-0.938-0.796-1.417-1.183 c-0.315-0.256-0.624-0.523-0.954-0.767c-0.559-0.418-1.14-0.795-1.72-1.174c-0.281-0.181-0.555-0.375-0.841-0.546 c-0.712-0.431-1.447-0.818-2.195-1.192c-0.167-0.079-0.316-0.18-0.483-0.26l-0.186-0.088c-0.062-0.03-0.132-0.065-0.197-0.097 l-314.938-150.59c-15.696-7.51-34.536-0.863-42.05,14.848c-7.515,15.711-0.867,34.541,14.844,42.055l255.817,122.323 l-255.817,122.319C1116.379,1095.315,1109.731,1114.146,1117.246,1129.855z">
                    </path>
                  </g>
                </g>
              </svg>
              Link to Profile
            </button>
            <button type="button" v-if="person.githubLink"
              class="inline-flex items-center px-5 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              @click="openLink(person.githubLink)">
              <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g data-name="Layer 2">
                    <rect width="24" height="24" opacity="0"></rect>
                    <path
                      d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z">
                    </path>
                  </g>
                </g>
              </svg>
              Github Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


        
<script>

//IMAGE IMPORTS FOR ABOUT US CARDS - 5/31/24
import jesseWarlock from '../assets/aboutphotos/jessewarlock.jpg';
import mariahWarlock from "../assets/aboutphotos/mariahWarlock.png";
import tylerWarlock from "../assets/aboutphotos/tylerwarlock.png";



export default {
  data() {
    return {
      warlocks: [
        {
          id: 1,
          title: 'Jesse Hudak',
          image: jesseWarlock,
          description: 'Tech Wiz turned Warlock, Jesse likes music, food, late night coding sprees, working out and hiking',
          deployedLink: 'https://theamericansommelier.com',
        },
        {
          id: 2,
          title: 'Tyler Dinslage',
          image: tylerWarlock,
          description: 'A Wine Course and membership based website for a Sommelier, to be able to sell courses and content. Built with SquareSpace with my dev partner, Tyler Dinslage',
          deployedLink: 'https://theamericansommelier.com',
        },
        {
          id: 3,
          title: 'Mariah Wear',
          image: mariahWarlock,
          description: 'A Wine Course and membership based website for a Sommelier, to be able to sell courses and content. Built with SquareSpace with my dev partner, Tyler Dinslage',
          deployedLink: 'https://theamericansommelier.com',
        },

      ],
    };
  },
  methods: {
    openLink(link) {
      window.open(link, '_blank').focus();
    },
  },
};
</script>

<style>@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
  }

  .about-container {
  margin-top: 1em;
  color: white;
  /* max-height: 800px;  */
  overflow-y: auto; /* Enable vertical scrolling */
  scrollbar-width: thin; /* For Firefox */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* .about-container::-webkit-scrollbar {
  display: none;
} */

.aboutcard {
 flex: 0 1 300px;
 margin: 20px;
}
}</style>
