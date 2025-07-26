import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { UserPlus, Calendar, MapPin, Phone, Heart } from 'lucide-react';
import { toast } from 'sonner';
import Magnet from '@/blocks/Animations/Magnet/Magnet';

const RegisterSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const specialties = [
    t('specialty.boxing.title'),
    t('specialty.kickboxing.title'),
    t('specialty.muayThai.title'),
    t('specialty.gym.title'),
    t('specialty.mma.title'),
    t('specialty.fitness.title')
  ];
  const experienceLevels = [
    t('experience.beginner'),
    t('experience.some'),
    t('experience.intermediate'),
    t('experience.advanced'),
    t('experience.professional')
  ];

  const formSchema = z.object({
    firstName: z.string().min(2, t('validation.firstName.min')),
    lastName: z.string().min(2, t('validation.lastName.min')),
    placeOfBirth: z.string().min(2, t('validation.placeOfBirth.min')),
    dateOfBirth: z.string().refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 16 && age <= 80;
    }, t('validation.age.range')),
    phoneNumber: z.string().min(10, t('validation.phoneNumber.min')),
    address: z.string().min(10, t('validation.address.min')),
    bloodType: z.string().min(1, t('validation.bloodType.min')),
    gender: z.string().min(1, t('validation.gender.min')),
    emergencyContact: z.string().min(10, t('validation.emergencyContact.min')),
    specialty: z.string().min(1, t('validation.specialty.min')),
    experience: z.string().min(1, t('validation.experience.min')),
    goals: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      placeOfBirth: '',
      dateOfBirth: '',
      phoneNumber: '',
      address: '',
      bloodType: '',
      gender: '',
      emergencyContact: '',
      specialty: '',
      experience: '',
      goals: '',
    },
  });


const onSubmit = async (values: z.infer<typeof formSchema>) => {
  setIsSubmitting(true);
  
  try {
    // Convert the data to URL-encoded format instead of JSON
    const formData = new URLSearchParams();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    formData.append('submissionDate', new Date().toISOString());

    const response = await fetch('https://script.google.com/macros/s/AKfycbwfqjK2Lb84SmbZWxtyA7ilT61d267owJV128rCYmojUVRRlV1AhJttVy2AaXxgpC9zsw/exec', {
      method: 'POST',
      // Remove the Content-Type header - let the browser set it
      body: formData,
    });
    
    const result = await response.json();
    
    if (result.success) {
      toast.success(t('register.success'), { description: t('register.successDescription') });
      form.reset();
    } else {
      throw new Error(result.message || 'Submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    toast.error('Registration failed', { description: 'Please try again later.' });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section id="register-section" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 boxing-pattern opacity-10"></div>
      <div className="absolute top-20 left-10 w-40 h-40 border border-red-600 rounded-full opacity-10 float-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-yellow-500 rounded-full opacity-10 float-animation" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-bebas text-4xl md:text-6xl text-white mb-4">
            {t('register.title')}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('register.description')}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="glass-morphism border-gray-800">
            <CardHeader>
              <CardTitle className="font-bebas text-2xl md:text-3xl text-center text-gradient-gold">
                {t('register.form.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t('register.firstName')} *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('placeholder.firstName')} 
                              className="bg-gray-800 border-gray-700 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t('register.lastName')} *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('placeholder.lastName')} 
                              className="bg-gray-800 border-gray-700 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="placeOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {t('register.placeOfBirth')} *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('placeholder.placeOfBirth')} 
                              className="bg-gray-800 border-gray-700 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {t('register.dateOfBirth')} *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              className="bg-gray-800 border-gray-700 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            {t('register.phoneNumber')} *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('placeholder.phoneNumber')} 
                              className="bg-gray-800 border-gray-700 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t('register.address')} *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('placeholder.address')} 
                            className="bg-gray-800 border-gray-700 text-white"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Health & Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="bloodType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            {t('register.bloodType')} *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                <SelectValue placeholder={t('placeholder.bloodType')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {bloodTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t('register.gender')} *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                <SelectValue placeholder={t('placeholder.gender')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">{t('gender.male')}</SelectItem>
                              <SelectItem value="female">{t('gender.female')}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="emergencyContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t('register.emergencyContact')} *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('placeholder.emergencyContact')} 
                              className="bg-gray-800 border-gray-700 text-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Training Preferences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="specialty"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t('register.specialty')} *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                <SelectValue placeholder={t('placeholder.specialty')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {specialties.map((specialty) => (
                                <SelectItem key={specialty} value={specialty.toLowerCase()}>
                                  {specialty}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{t('register.experience')} *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                <SelectValue placeholder={t('placeholder.experience')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {experienceLevels.map((level) => (
                                <SelectItem key={level} value={level.toLowerCase().replace(/\s+/g, '-')}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t('register.goals')}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('placeholder.goals')} 
                            className="bg-gray-800 border-gray-700 text-white"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-red-gold hover:scale-105 transition-all duration-300 pulse-glow text-lg py-6"
                  >
                    {isSubmitting ? t('register.submitting') : t('register.submit')}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Floating Registration Button with Magnet Animation */}
      <div className="fixed bottom-8 right-8 z-50">
        <Magnet
          magnetStrength={1}
          padding={50}
          activeTransition="transform 0.2s ease-out"
          inactiveTransition="transform 0.4s ease-in-out"
        >
          <Button
            onClick={() => {
              document.getElementById('register-section')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            size="lg"
            className="bg-gradient-red-gold hover:scale-110 transition-all duration-300 pulse-glow shadow-2xl rounded-full px-4 py-2"
          >
            <span className="font-bebas text-lg">{t("nav.joinNow")}</span>

          </Button>
        </Magnet>
      </div>
    </section>
  );
};

export default RegisterSection;