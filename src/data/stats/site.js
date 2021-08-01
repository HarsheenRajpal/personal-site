
/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Wanna get started with JS, to build things like these : ',
    key: 'subscribers_count',
    link: 'https://github.com/public-apis/public-apis',
  },
 {
     label: 'Last Updated on ',
    value: '1st August 2021 ',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/KhushiRajpal/personal-site/network',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },

  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2115',
    link: 'https://github.com/KhushiRajpal/personal-site/graphs/contributors',
  },
];

export default data;
