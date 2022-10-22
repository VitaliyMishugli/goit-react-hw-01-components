import PropTypes from 'prop-types';
import { StatisticCard, StatisticList,StatisticTitle, StatisticItem  } from './Statistics.styled';


const Statistics = ({title, stats}) => {
  return  <StatisticCard>
  <StatisticTitle>{title}</StatisticTitle>

    <StatisticList>
      {stats.map(stat => (
        <StatisticItem key={stat.id } >
           <span >{ stat.label}</span>
           <span >{ stat.percentage}%</span>
        </StatisticItem>
      ))}
    {/* <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li> */}
  </StatisticList>
</StatisticCard>
  
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}


export default Statistics;