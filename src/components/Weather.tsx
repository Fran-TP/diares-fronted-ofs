import WeatherCloudyIcon from '../icons/WeatherCloudy'
import WeatherRainyIcon from '../icons/WeatherRainy'
import WeatherSunnyIcon from '../icons/WeatherSunny'
import WeatherWindyIcon from '../icons/WeatherWindy'
import ChipContainer from '../layout/ChipContainer'
import { Weather as EntryWeatherType } from '../types'

interface Props {
  weather: EntryWeatherType
}

const Weather = ({ weather }: Props) => {
  switch (weather) {
    case EntryWeatherType.Sunny:
      return (
        <ChipContainer>
          <span className='text-sm'>{weather.toUpperCase()}</span>
          <WeatherSunnyIcon className='h-5 w-5' />
        </ChipContainer>
      )
    case EntryWeatherType.Cloudy:
      return (
        <ChipContainer>
          <span className='text-sm'>{weather.toUpperCase()}</span>
          <WeatherCloudyIcon className='h-5 w-5' />
        </ChipContainer>
      )
    case EntryWeatherType.Rainy:
      return (
        <ChipContainer>
          <span className='text-sm'>{weather.toUpperCase()}</span>
          <WeatherRainyIcon className='h-5 w-5' />
        </ChipContainer>
      )
    case EntryWeatherType.Windy:
      return (
        <ChipContainer>
          <span className='text-sm'>{weather.toUpperCase()}</span>
          <WeatherWindyIcon className='h-5 w-5' />
        </ChipContainer>
      )
    default:
      // eslint-disable-next-line no-case-declarations
      const _exhaustiveCheck: never = weather

      return _exhaustiveCheck
  }
}

export default Weather
