
var text={
	// Introduction and Welcome
	f0_0:"Let's get started!",
	f1_0:"Welcome to the EO-Lab course for Deep Learning for EO data processing on the EO cloud with Tensor flow. This course is designed in such a way that you can study the material on your own. The course content is conveyed through interactive elements, meaning that chapters as well as exercises use multi-media content to  study the matter presented. We hope you will enjoy this course!",
	
	//1 Content
	f2_0:"The following contents will be covered by this course.",
	f2_0_f_1:"First we will share some general information about the course.",
	f2_0_f_2:" In the next chapter we provide an introduction to deep learning for earth observation.",
	f2_0_f_3: "Followed by the explanation of convolutional neural networks, in short, CNNs.",
	f2_0_f_4: "We will then show you how to use the EO Lab browser and platform to implement a deep learning model in tensor flow.", 
	f2_0_f_5:"Finally we summarise the most important take-aways of this course.",


	// 2 Preface
	f3_0:"This satellite image was taken by the Sentinel 2 satellite in May 2022, showing the city of Salzburg. This view will accompany us through the course at the start and closing of each chapter.",

	// 2.1 Set- up
	f3_1:"To follow the course and get the best learning experience, the following set up is needed. A dedicated cloud resource on EO-Lab was generated. Further a virtual machine with GPU support was implemented; as well as a scripting editor for phyton was installed. In this course we will use Jupyter notebook. If you need help to set up the EO lab resources accordingly you can find a detailed information at the EO lab help section or the EO lab knowledge base.",
	// 2.2 Work Environment
	f3_2:"Before proceeding, please connect in a separate window to you virtual machine on EO lab. This way you can actively follow the course content. ",
	//2.3 Section Ende
	f3_3:"If everything is set up go on to chapter 1.",



	// 3 Introduction to AI for EO
	f4_0:"Chapter 1: Introduction to artificial intellegence for earth observation",
		//3.1 CNNs
		f4_1:"The general objective in our context is to classify different land cover types on a satellite imagery using convolutional neural networks.",
			f4_1_f_1:"There are different approaches applied within deep learning. Supervised learning, which requires images and labels of the objects to be classified. They are fed to a machine learning algorithm, which then produces the classification.",
			f4_1_f_2:"Supervised machine learning works with an artificial intelligence model. This model is trained with image and label data. Based on these data the parameters of an algorthim are adjusted. The model learns and improves through training. Afterwards the model can then be re-used to classify new imagery.",
			f4_1_f_3:"There exist different types of classification tasks for deep learning, which we will explain to you in the next slide. For and illustration at the end of the lecture, we will use semantic segmentation.",
		//3.2 Classification tasks
			f4_2:"In general we distinguish between several different tasks to be performed using deep learning for image classification. The first is image classification and recognition. Here, images are recognized according to the scene content. images receive one label, for instance an image showing an airport. When single objects should be detected in a scene, we speak of object detection. Here single objects are recognized and marked either with bounding boxes or delineated in more detail. Segmentation tasks combine object detection and classification.",
			f4_2_f_1:"Later on we will use semantic segmentation. But what is it?",
			f4_2_f_2:"Semantic segmentation assigns class probabilites to each picksel. It ends up with image segments classified according to the specific class of interest. Instance segmentation goes one step further and distinguishes single instances, or objects, of each class.",
		//3.3 DL workflow
		f4_3:"Let us take a look at the general deep learning workflow for EO data. At first the input data has to be collected. There are different options how to get input data, which we will explain in the next slide.",
			f4_3_f_1:"In the following step a classifier and the respective model parameters need to be selected",
			f4_3_f_2:"Now the model is trained and the first classifcation is performed",
			f4_3_f_3:"The classification result needs to be assessed and evaluated",
			f4_3_f_4:"If the classification is satisfying it shall be used further on. In case of a poor prediction result, new input data are collected to improve the model performance.",
		//3.4 DL workflow complete
		f4_4:"The complete workflow can be seen in this image. For the model training, pairs of classified satellite images and labels are used as input data. In the training phase the input data is seperated into training, validation and testing data. Training and validation data are used as input for the model. At the end the test data is used for determining the accuracy of the model's prediction. The model result is a so-called propability map showing class assignment probabilites for each picksel. Users then set thresholds for the final class assignments and create the final classification map.",
	
		//3.5 Quiz --> no text to stop speech --< can be optimized later
		f4_5:"",

	//4 CNN
	f5_0:"Chapter 2: The architecture of CNNs",
		// CNN Architecture
		f5_1:"There are again different ways to design a convolutional neural network",
		f5_1_f_1:"Feature maps are constructed using convolution and pooling. This includes filter kernels to create feature maps. Each filter output is called a layer. These layers are used to learn characteristic features of the input data and weigh them. Therefore each layer containes a certain number of nodes, which are mathematical functions. ",
		f5_1_f_2:"In a fully connected convolutional network the nodes of all layers are connected to each other. In this case, no assumptions about the input data is made. Deep learning models can have multiple layers and is able to carry out more complex tasks like semantic segmentation.",
		//U-Net model

		f5_2:"An example of a deep learning model is the U-Net model, which will be used in the example. The U-Net model architecture has the shape of the letter U and is a combination of an encoder and decoder.",
		f5_2_f_1:"At first the input data runs through the encoder path, also referred to the contracting analysis path. Here the model weights are trained. ",
		f5_2_f_2:"The decoder path, also called expansive synthesis path, projects the learned feature representation to the original pixel space. The result is a prediction map, where each pixel had been assigned a semantic class.",

		//Quiz
		f5_3:"",

	//5 Application
	f6_0:"Chapter 3: Application example with tensor flow",
		//Application context
		f6_1:"In our example we will use a subset of a Sentinel 2 image and the world cover dataset provided by the European Space Agency ESA. Both datasets are available in the EO-Lab archive. In the following example a deep learning model will be trained on the virtual machine for landcover classification. ",
		//Preparation
		f6_2:"At first we use the EO- browser to identify the necessary satellite image. Then go to your virtual machine and search for the selected satellite image in the repositories provided by the EO-Lab. Define two AOIs one for training and the other one for testing the model. It is important that all classes are represented in the training image. Then store subsets based on your AOIs of the Sentinel 2 image and the ESA world cover dataset. This will be your training data. It is important, that the image raster in this case the sentinel 2 image. and the label raster, here the ESA World cover, have the same file extension. The image and raster data can be prepared in a GIS software to also ensure a consistent numbering of the classes, starting from zero.",
		//Libaries
		f6_3:"Now, open a new Jupyter notebook. The follwing libraries need to be installed.",
		// Sample preparation-1
		f6_4:" The image and label data ar imported using rasterio. ",
		f6_4_f_1:"During the preparation the data is turned into smaller image patches using patchify. The patchsize is defined at the beginning.",
		f6_4_f_2:"For the training phase, the image is first turned into a numpy array an then prepared as tensor. A tensor contains all image patches and all bands of the input raster.",
		f6_4_f_3:"The label data is also imported with rasterio.",
		f6_4_f_4:"Additionally, the label data has to be one-hot-encoded. This means that the classes now saved in one band are saved seperatly. So each class gets its own band and the label raster is in the end a mulit-label raster containing values from 1 and 0. Picksels with value 1 belong to the class and 0 does not belongs to ut.",
		// Sample Prepartion-2
		f6_5:"Now the image and label patches are seperated into  training and validation data. This figure shows how the image patches with the according classification can look like.",
		// Model Preparation
		f6_6:"After creating the training data we will know configure the model, which we used from the segmenation model libary provided on github by q u b v e l",
		f6_6_f_1:"Before the model can be trained the backbone of the model, metrics and callbacks as well as loss function and optimizer have to be defined.",
		//Model Evaluation
		f6_7:"For the model evaluation the evaluation data will be used, which has to be perpared the same way as the input data and turned into patches. The model can then be evaluated by the follwing code",
		// Further Use-1
		f6_8:"After the evaluation and prediction the single image patches have to be reconstructed to a whole image again.",
		// Further Use- 2
		f6_9:"For further use save the prediction map as raster",
		f6_9_f_1:"The quality of the model performance can either be analyzed in python but also by a GIS software",
		f6_9_f_2:"If the model performance is not satisfying additional training data should be included, also the model parameters like loss-function can be adapted, but also the model architecture itself can be adapted.",
		f6_9_f_3:"For a landcover change analysis the model can be used to further classify the landcover of satellite images from different dates.",
		//Code
		f6_10:"Here you can see the whole code, which was used for the example. You can find the link to the Jupyter notebook in the course description.",
		//Quiz
		f6_11:"",

	//6 Summary
	f7_0:"Chapter 4: Summary",
		f7_1_f_1:"What type of classifications can be addressed by deep learning",
		f7_1_f_2:"What kind of DL model s are suitable for semantic segmentation",
		f7_1_f_3:"Which steps on your virtual machine on EO-Lab are necessary to prepare EO data for analysis with a DL mode",
		f7_1_f_4:"Which processing components to include in a Tensor Flow script for perfoming semantic segmentation with a U-Net model",

	}
