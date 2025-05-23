import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHotelContext } from '../../context/hotelProvider';
import { useSearchContext } from '../../context/searchProvider';
import Spinner from '../../components/shared/Spinner/Spinner';
import Gallery from '../../components/hotel/Gallery/Gallery';
import Information from '../../components/hotel/Information/Information';
import Reviews from '../../components/hotel/Reviews/Reviews';
import Rooms from '../../components/hotel/Rooms/Rooms';
import classes from './HotelPage.module.css';

const HotelPage: FC = () => {
  const { fetchHotelData, isLoading } = useHotelContext();
  const { searchQuery } = useSearchContext();
  const { hotelId } = useParams<{ hotelId: string }>();
  const id = hotelId ? parseInt(hotelId, 10) : 0;

  useEffect(() => {
    fetchHotelData(id, searchQuery.checkInDate, searchQuery.checkOutDate);
  }, [id, fetchHotelData, searchQuery.checkInDate, searchQuery.checkOutDate]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={classes.hotelPage}>
      <Gallery />
      <Information />
      <Rooms />
      <Reviews />
    </div>
  );
};

export default HotelPage;
