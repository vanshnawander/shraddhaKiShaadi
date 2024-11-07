import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import image from './assets/IMG_20241107_225400.jpg';
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock, MapPin, Heart, GraduationCap } from "lucide-react";

export default function WeddingInvitation(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 p-2 sm:p-4">
      <Card className="mx-auto max-w-3xl bg-pink-100 backdrop-blur">
        <CardContent className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-red-600 mb-4 text-lg sm:text-xl">॥ श्री गणेशाय नमः ॥</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 mb-2">Wedding Invitation</h1>
            <div className="flex justify-center items-center gap-2">
              <Separator className="w-8 sm:w-12" />
              <Heart className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              <Separator className="w-8 sm:w-12" />
            </div>
          </div>
          <div className="relative w-full sm:h-80 rounded-lg overflow-hidden">
              <img src={image} alt="img" />
          </div>

          {/* Couple Names */}
          <div className="text-center mt-6 mb-6 sm:mb-8">
            <div className="space-y-2 mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-700">
                Shraddha 
                <p className="inline-block text-gray-600 text-sm ml-2 sm:text-base">(LLB)</p>
                <GraduationCap className="inline-block w-5 h-5 ml-2 text-red-600" />
              </h2>
             
            </div>
            <div className="text-red-400 text-2xl mb-4">&</div>
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-700">
              Mayur Ji
              <p className="inline-block text-gray-600 text-sm ml-2 sm:text-base">(CA)</p>
                <GraduationCap className="inline-block w-5 h-5 ml-2 text-red-600" />
              </h2>
             
            </div>
          </div>
          <div className="text-center mb-6 sm:mb-8 space-y-4">
            <div>
              <p className="text-gray-600 text-sm sm:text-base">Son of</p>
              <p className="text-base sm:text-lg font-medium">Smt. Sulochna & Shri Mahesh Ji Agarwal</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm sm:text-base">Daughter of</p>
              <p className="text-base sm:text-lg font-medium">Smt. Savita & Shri Surya Prakash Nawander</p>
            </div>
          </div>

          {/* Date and Time Details */}
          <div className="space-y-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 justify-center">
              <CalendarDays className="text-red-600 w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-base sm:text-lg font-medium">Friday, November 22nd, 2024</p>
            </div>
            
            <div className="flex items-center gap-3 justify-center">
              <Clock className="text-red-600 w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-base sm:text-lg font-medium">Time: 9:11 PM Onwards</p>
            </div>
          </div>

          {/* Venue */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center gap-3 justify-center mb-4">
              <MapPin className="text-red-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <p className="text-base sm:text-lg font-medium">
                Raj Mahal Palace<br />
                Shamshabad, Hyderabad
              </p>
            </div>

            {/* Map */}
            <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.7438503699714!2d78.40498937516244!3d17.279623083589335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbc4a72884773%3A0x749fa86d68765bbb!2sRaj%20Mahal%20Function%20Hall!5e0!3m2!1sen!2sin!4v1730967376224!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="text-center space-y-4 mb-8 bg-red-100">
            <h3 className="text-xl font-semibold text-red-700">Wedding Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-1">
              <div className="p-1 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-800">Moong haath</h4>       
                <p className="text-gray-600">21st November, 10:30 AM</p>
              </div>
              <div className="p-1 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-800">Mayra</h4>
                <p className="text-gray-600">21st November, 2:30 PM</p>
              </div>
              <div className="p-1 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-800">Ghee palai</h4>
                <p className="text-gray-600">21st November, 6:30 PM</p>
              </div>
              <div className="p-1 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-800">Vinayak</h4>
                <p className="text-gray-600">22nd November, 8:00 AM</p>
              </div>
              <div className="p-1 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-800">Phool ki Holi</h4>
                <p className="text-gray-600">22nd November, 11:00 AM</p>
              </div>

              <h3 className="text-xl font-semibold text-red-700">Venue: Kedia Bhavan</h3>
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6011445443773!2d78.46386597584215!3d17.382915302932567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977856f83e97%3A0x162bc38cfffd2b66!2sKedia%20Bhawan!5e0!3m2!1sen!2sin!4v1730999770218!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            </div>
          </div>

          {/* RSVP */}
          <div className="text-center">
            <Separator className="mb-4" />
            <p className="text-base sm:text-lg font-medium text-red-700 mb-2">Join us in our celebration</p>
            <p className="text-sm sm:text-base text-gray-600 italic">
              "Your presence will add to our joy"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
