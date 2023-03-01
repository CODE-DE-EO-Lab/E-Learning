
var text={
	// Introduction and Welcome
	f0_0:"Let's get started!",
	f1_0:"Welcome to the EO-Lab course for Deep Learning for EO data processing on the EO Cloud with Tensorflow. You've already noticed that this course is designed in such a way that you can study the material on your own. All relevant documents, papers, and other external sources are provided. The content is conveyed through interactive sessions, meaning that chapters as well as exercises use multi-media content to  study the matter presented. Explore and enjoy!",
	
	//1 Content
	f2_0:"The following contents will be covered in this course.",
	f2_0_f_1:"First we will convey some general information about this course.",
	f2_0_f_2:" In the next chapter an introduction to deep learning for earth observation will be given.",
	f2_0_f_3: "Followed by the explanation of convolutional neural networks",
	f2_0_f_4: "We will then show you how to use the EO- Lab Browser and Platform to implement a deep learning model in tensorflow.", 
	f2_0_f_5:"Finally a summary will provide you the most important points of this course.",


	// 2 Preface
	f3_0:"This satellite image was taken by the Sentinel 2 satellite, showing Salzburg. It will accompany us through the course showing the ending and start of each chapter.",

	// 2.1 Set- up
	f3_1:"To follow the course and get the best learning outcome the following set up is needed. A own cloud resource on EO-Lab was generated. Further a virtual machine with GPU support was implemented and a scripting editor for python was installed. In this course we will use Jupyter notebook. If you need help to set up the EO-Lab resources accordingly you can find a detailed information at the EO-lab Help or the EO- Lab knowledgebase.",
	// 2.2 Work Environment
	f3_2:"Before you go on please connect in a separate window to you virtual machine on EO-Lab. In this way you can actively follow the course content. ",
	//2.3 Section Ende
	f3_3:"If everything is set-up go on to chapter 1.",



	// 3 Introduction to AI for EO
	f4_0:"Chapter 1: Introduction to artificial intelligence for earth observation" ,
		//3.1 CNNs
		f4_1:"The general objective is to classify land cover in satellite imagery using convolutional neural networks. Also called CNNs.",
			f4_1_f_1:"There are different approaches applied by deep learning. Supervised learning, which requires images and labels of the objects to be classified. They are fed to a machine learning algorithm, which then provides the classification.",
			f4_1_f_2:"Supervised machine learning works with an artificial intelligence model. This model is trained with image and label data, based on this data the parameter of an algorithm are adjusted. The model learns and improves through training. Afterwards the model can then be sued to predict new images.",
			f4_1_f_3:"There exist different types of classification tasks for deep learning, which we will explain to you in the next slide. For the example in the end of the lecture we will use semantic segmentation.",
		//3.2 Classification tasks
			f4_2:"Overall there are fife different tasks which can be fulfilled using deep learning for image classification. First image classification and recognition. Here images are recognized according to the scene content and obtain one label. For instance airport. If single objects should be detected in a scene, the you need object detection. Here single objects are recognized and marked either with bounding boxes or delineated in more detail. Segmentation tasks combine object detection and classification. ",
			f4_2_f_1:"We will use semantic segmentation. But what is semantic segmentation?",
			f4_2_f_2:"Segmentation first creates image segments, which are used for object detection and classification. Semantic or image segmentation in contrast to instance segmentation assigns class probabilities to each pixel. Providing a very detailed prediction",
		//3.3 DL workflow
		f4_3:"Let us take a look at the general deep learning workflow for earth observation data. At first the input data has to be collected. There are different possibilities how to get input data, which will be described closer in the next slide.",
			f4_3_f_1:"In the next step a classificator and the model parameters have to be selected",
			f4_3_f_2:"Now the model is trained and the first classification is performed",
			f4_3_f_3:"The classification result has to be assessed and evaluated",
			f4_3_f_4:"If the classification is satisfying it can be used further. In case of a low prediction result new input data has to be collected to improve the model performance.",
		//3.4 DL workflow complete
		f4_4:"The complete workflow can be seen in this image. For the model training, pairs of classified satellite images and  labels are used as input data. When the model is used for prediction the input data is the satellite image, which should be classified by the model. In the training phase the input data is separated into training, validation and testing data. Training and validation data are used as input for the model. At the end the test data is used for determining the accuracy of the model prediction. The model result is a so-called probability map, which provides a probability map. The user can then decide how to define the final classes and create the final prediction map.",
	
		//3.5 Quiz
		f4_5:"",

	//4 CNN
	f5_0:"Chapter 2: The Convolutional Neural Network architecture ",
		// CNN Architecture
		f5_1:"There are two different ways to design a convolutional neural network",
		f5_1_f_1:"Feature maps are constructed using convolution and pooling. This includes filters and kernels to create feature maps. Each filter or kernel is called a layer. These layers are used to learn characteristic features of the input data and weight them. Therefore each layer contains a certain number of nodes, which are mathematical functions. ",
		f5_1_f_2:"In a fully connected convolutional network the nodes of all layers are connected to each other. So that no assumptions about the input data is made. There difference between a CNN and a deep learning model is the number of layers. A deep learning model has far more layers and is able to carry out more complex tasks like semantic segmentation.",
		//U-Net model

		f5_2:"An example of a deep learning model is the U-Net model, which will be used in the example. The U-Net model architecture has the shape of an U and is a combination of an encoder and decoder.",
		f5_2_f_1:"At first the input data runs through the encoder path. The contracting analysis path. Here the model weights are trained. ",
		f5_2_f_2:"The Decoder path also called expansive synthesis path projects the learned feature representation to the original pixel space. The result is a prediction map, where each pixel had been assigned a semantic class.",

		//Quiz
		f5_3:"",

	//5 Application
	f6_0:"Chapter 3: Application example with tensorflow",
		//Application context
		f6_1:"In our example we will use a subset of sentinel 2 image and the according ESA worldcover. Both datasets are available in the EO-Lab archive. In the following example a deep learning model will be trained on the virtual machine for landcover classification. ",
		//Preparation
		f6_2:"At first use the EO- browser to identify the necessary satellite image. Then go to your virtual machine and search for the selected satellite image in the repositories provided by the EO-Lab. Define two AOIs one for training and the other one for testing the model. It is important that all classes are represented in the training image. Then store subsets based on your AOIs of the sentinel 2 image and the ESA worldcover. This will be your training data. It is important, that the image raster in this case the sentinel 2 image. and the label raster, here the ESA Worldcover,  have the same extension. The image and raster data can be prepared in a GIS software to also ensure a continuous numbering of the classes. Starting by zero.",
		//Libaries
		f6_3:"Now, open a new Jupyter notebook. The following libraries need to be installed.",
		// Sample preparation-1
		f6_4:" The image and label data is imported using rasterio. ",
		f6_4_f_1:"During the preparation the data is turned into smaller image patches using patchify. The patchsize is defined at the beginning.",
		f6_4_f_2:"For the training the image is first turned into a numpy array an then prepared as tensor. A tensor contains all image patches and all bands of the input raster.",
		f6_4_f_3:"The label data is also imported with rasterio.",
		f6_4_f_4:"Additional the label data has to be one-hot-encoded. This means that the classes now saved in one band are saved seperatly. So each class gets its own band and the label raster is in the end a mulit-label raster containing values from 1 and 0. 1 picksel belongs to class and 0 does not belongs to class.",
		// Sample Prepartion-2
		f6_5:"Now the image and label patches are separated into the training and validation data. This figure shows how the image patches with the according classification can look like.",
		// Model Preparation
		f6_6:"After creating the training data we will know configure the model, which we used from the segmentation model library provided on github by q u b v e l",
		f6_6_f_1:"Before the model can be trained the backbone of the model, metrics and callbacks as well as loss function and optimizer have to be defined.",
		//Model Evaluation
		f6_7:"For the model evaluation the evaluation data will be used, which has to be prepared the same way as the input data and turned into patches. The model can then be evaluated by the following code",
		// Further Use-1
		f6_8:"After the evaluation and prediction the single image patches have to be reconstructed to a whole image again.",
		// Further Use- 2
		f6_9:"For further use save the prediction map as raster",
		f6_9_f_1:"The quality of the model performance can either be analyzed with python but also with a GIS software",
		f6_9_f_2:"If the model performance is not satisfying additional training data should be included, also the model parameters like loss-function can be adapted, but also the model architecture itself can be adapted.",
		f6_9_f_3:"For a landcover change analysis the model can be used to further classify the landcover of satellite images from different dates.",
		//Code
		f6_10:"Here you can see the whole code, which was used for the example. You can find the link to the Jupyter notebook in the course description. ",
		//Quiz
		f6_11:"",

	//6 Summary
		f7_0:"Chapter 4: Summary",
		f7_1_f_1:"What type of classifications can be addressed with Deep Learning",
		f7_1_f_2:"What kind of DL model s are suitable for semantic segmentation",
		f7_1_f_3:"Which steps on your Virtual Machine on EO-Lab are necessary to prepare EO data for analysis with a DL mode",
		f7_1_f_4:"Which processing components to include in a TensorFlow script for performing semantic segmentation with a U-Net model",

	}