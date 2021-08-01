/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 */
const data = [
  {
    label: 'Number of lints',
    value: '0 //enforced via github workflow',
  },
  {
    label: 'Number of spoons',
    value: '0',
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
