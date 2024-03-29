import React from 'react';
import { useForm } from 'react-hook-form';

import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

import {
  contact,
  contact__infoTitle,
  contact__infoMuted,
  firstInput,
  error,
} from './Contact.module.scss';

const Contact = ({ sectionStyles }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section id="contact" className={`${sectionStyles} ${contact}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionHeader
              header="GET IN TOUCH"
              description="We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results."
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-12">
            <div className="contact__info">
              <p className="d-flex flex-column mb-5">
                <span className={contact__infoTitle}>Office Address 1:</span>
                <span className={contact__infoMuted}>
                  4461 Cedar Street Moro, AR 72368
                </span>
              </p>
              <p className="d-flex flex-column mb-5">
                <span className={contact__infoTitle}>Office Address 2:</span>
                <span className={contact__infoMuted}>
                  2467 Swick Hill Street
                </span>
                <span className={contact__infoMuted}>
                  New Orleans, LA 70171
                </span>
              </p>
              <p className="d-flex flex-column">
                <span className={contact__infoTitle}>Working Hours:</span>
                <span className={contact__infoMuted}>9:00AM To 6:00PM</span>
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-4 ">
                <div className={`col-lg-6 col-md-12 ${firstInput}`}>
                  <input
                    type="name"
                    placeholder="Your Name*"
                    {...register('name', { required: true })}
                  />
                  {errors?.name?.type === 'required' && (
                    <p className={error}>This field is required</p>
                  )}
                </div>
                <div className="col-lg-6 col-md-12">
                  <input
                    type="email"
                    placeholder="Your Emaill*"
                    {...register('email', { required: true })}
                  />
                  {errors?.email?.type === 'required' && (
                    <p className={error}>This field is required</p>
                  )}
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <input
                    type="text"
                    placeholder="Your Subject.."
                    {...register('subject', { required: true })}
                  />
                  {errors?.subject?.type === 'required' && (
                    <p className={error}>This field is required</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <textarea
                    cols="30"
                    rows="4"
                    placeholder="Your Message.."
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-end mt-3">
                  <Button type="submit">Send Message</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
